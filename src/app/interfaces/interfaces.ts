export interface User {
    email: string;
    password: string;
    name?: string;
  }
  
  export interface Organization {
    id: string;
    name: string;
  }
  
  export interface Step2Fields {
    organization: string;
    designation: string;
    birthDate: Date;
    city: string;
    pincode: string;
  }
  