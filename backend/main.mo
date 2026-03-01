import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Text "mo:core/Text";
import List "mo:core/List";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";

actor {
  include MixinStorage();

  // Custom Types
  type ContactFormSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type AdmissionEnquiry = {
    id : Nat;
    studentName : Text;
    parentName : Text;
    email : Text;
    phone : Text;
    preferredClass : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type NewsAnnouncement = {
    id : Nat;
    title : Text;
    content : Text;
    publicationDate : Time.Time;
  };

  // Gallery Types
  type GalleryCategory = {
    #events;
    #campus;
    #activities;
  };

  type GalleryImage = {
    id : Nat;
    title : Text;
    description : Text;
    category : GalleryCategory;
    uploadDate : Time.Time;
    file : Storage.ExternalBlob;
  };

  // Data Stores
  var nextContactId = 1;
  var nextEnquiryId = 1;
  var nextNewsId = 1;
  var nextImageId = 1;

  let contacts = Map.empty<Nat, ContactFormSubmission>();
  let enquiries = Map.empty<Nat, AdmissionEnquiry>();
  let news = Map.empty<Nat, NewsAnnouncement>();
  let images = Map.empty<Nat, GalleryImage>();

  module NewsAnnouncement {
    public func compareByDate(a : NewsAnnouncement, b : NewsAnnouncement) : Order.Order {
      Int.compare(b.publicationDate, a.publicationDate);
    };
  };

  // Contact Form Functionality
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, subject : Text, message : Text) : async Nat {
    let id = nextContactId;
    let submission = {
      id;
      name;
      email;
      subject;
      message;
      timestamp = Time.now();
    };
    contacts.add(id, submission);
    nextContactId += 1;
    id;
  };

  public query ({ caller }) func getAllContacts() : async [ContactFormSubmission] {
    contacts.values().toArray();
  };

  // Admission Enquiry Functionality
  public shared ({ caller }) func submitAdmissionEnquiry(studentName : Text, parentName : Text, email : Text, phone : Text, preferredClass : Text, message : Text) : async Nat {
    let id = nextEnquiryId;
    let enquiry = {
      id;
      studentName;
      parentName;
      email;
      phone;
      preferredClass;
      message;
      timestamp = Time.now();
    };
    enquiries.add(id, enquiry);
    nextEnquiryId += 1;
    id;
  };

  public query ({ caller }) func getAllEnquiries() : async [AdmissionEnquiry] {
    enquiries.values().toArray();
  };

  // News & Announcements Functionality
  public shared ({ caller }) func createNews(title : Text, content : Text) : async Nat {
    let id = nextNewsId;
    let announcement = {
      id;
      title;
      content;
      publicationDate = Time.now();
    };
    news.add(id, announcement);
    nextNewsId += 1;
    id;
  };

  public query ({ caller }) func getAllNews() : async [NewsAnnouncement] {
    news.values().toArray().sort(NewsAnnouncement.compareByDate);
  };

  // Gallery Functionality
  public shared ({ caller }) func addGalleryImage(title : Text, description : Text, category : GalleryCategory, file : Storage.ExternalBlob) : async Nat {
    let id = nextImageId;
    let image = {
      id;
      title;
      description;
      category;
      uploadDate = Time.now();
      file;
    };
    images.add(id, image);
    nextImageId += 1;
    id;
  };

  public query ({ caller }) func getImagesByCategory(category : GalleryCategory) : async [GalleryImage] {
    let resultList = List.empty<GalleryImage>();

    for ((_, image) in images.entries()) {
      if (image.category == category) {
        resultList.add(image);
      };
    };

    resultList.toArray();
  };

  public query ({ caller }) func getAllImages() : async [GalleryImage] {
    images.values().toArray();
  };

  public shared ({ caller }) func deleteImage(id : Nat) : async () {
    if (not images.containsKey(id)) {
      Runtime.trap("Image with id " # id.toText() # " does not exist. ");
    };
    images.remove(id);
  };

  public query ({ caller }) func getImage(id : Nat) : async GalleryImage {
    switch (images.get(id)) {
      case (null) { Runtime.trap("Image with id " # id.toText() # " does not exist. ") };
      case (?image) { image };
    };
  };
};
