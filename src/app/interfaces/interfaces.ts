export interface User {
    email: string;
    password: string;
    name?: string;
  }
  
  export interface Organization {
    id: string;
    name: string;
  }
  
  export interface UserDetail {
    organizationName: string;
    designation: string;
    birthDate: Date;
    city: string;
    pincode: string;
  }
  
  