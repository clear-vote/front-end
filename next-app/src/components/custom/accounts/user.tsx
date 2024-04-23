import React, { useState } from 'react';

interface IUserProps {
  // Define props here
  id: number;
  name: string;
  email: string;
}

const UserComponent: React.FC<IUserProps> = (props) => {
  // Component logic here
  const [user, setUser] = useState<User>(new User(0, 'John Doe', 'john@gmail.com'));

  return (
    // JSX markup here
    <></>
  );
};



class User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Getter methods
  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  // Setter methods
  setName(name: string): void {
    this.name = name;
  }

  setEmail(email: string): void {
    this.email = email;
  }
}

export default UserComponent;