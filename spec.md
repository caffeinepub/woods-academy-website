# Woods Academy Website

## Current State
The website has a full backend with `getAllContacts()` and `getAllEnquiries()` query functions already implemented. The frontend has all school pages but no admin view to see submitted forms.

## Requested Changes (Diff)

### Add
- `/admin` route with a simple password-protected admin dashboard
- Admin login screen (password: WoodsAdmin2024)
- Two tabs: Contact Messages and Admission Enquiries
- Table view of all submissions with name, email, subject/class, message, and date
- `useGetAllContacts` and `useGetAllEnquiries` hooks in useQueries.ts

### Modify
- App.tsx: add adminRoute
- useQueries.ts: add two new query hooks for fetching contacts and enquiries

### Remove
- Nothing

## Implementation Plan
1. Add `useGetAllContacts` and `useGetAllEnquiries` hooks to useQueries.ts
2. Create AdminPage.tsx with password login + tabbed view of submissions
3. Register `/admin` route in App.tsx
