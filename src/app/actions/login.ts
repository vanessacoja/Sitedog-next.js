'use serve';

import { cookies } from "next/headers";

export default async function login (formData:FormData){
  const username = formData.get('username') as string|null;
  const password = formData.get('password') as string|null;
  const response = await fetch('https://dogspi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify(body), 
      })
  const data = await response.json();
  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
    sameSite:'lax',
    //tempo do cokies
    maxAge: 60*60 *20
  }
  console.log(data);
}