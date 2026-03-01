import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface ContactFormSubmission {
    id: bigint;
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface AdmissionEnquiry {
    id: bigint;
    preferredClass: string;
    studentName: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
    parentName: string;
}
export type Time = bigint;
export interface GalleryImage {
    id: bigint;
    title: string;
    file: ExternalBlob;
    description: string;
    category: GalleryCategory;
    uploadDate: Time;
}
export interface NewsAnnouncement {
    id: bigint;
    title: string;
    content: string;
    publicationDate: Time;
}
export enum GalleryCategory {
    activities = "activities",
    events = "events",
    campus = "campus"
}
export interface backendInterface {
    addGalleryImage(title: string, description: string, category: GalleryCategory, file: ExternalBlob): Promise<bigint>;
    createNews(title: string, content: string): Promise<bigint>;
    deleteImage(id: bigint): Promise<void>;
    getAllContacts(): Promise<Array<ContactFormSubmission>>;
    getAllEnquiries(): Promise<Array<AdmissionEnquiry>>;
    getAllImages(): Promise<Array<GalleryImage>>;
    getAllNews(): Promise<Array<NewsAnnouncement>>;
    getImage(id: bigint): Promise<GalleryImage>;
    getImagesByCategory(category: GalleryCategory): Promise<Array<GalleryImage>>;
    submitAdmissionEnquiry(studentName: string, parentName: string, email: string, phone: string, preferredClass: string, message: string): Promise<bigint>;
    submitContactForm(name: string, email: string, subject: string, message: string): Promise<bigint>;
}
