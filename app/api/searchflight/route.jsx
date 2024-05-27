import { NextResponse } from "next/server"
export async function POST(request) {
  const params = await request.json()
  if (params != ''){
    const url = new URL('https://api.tequila.kiwi.com/v2/search/');
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    let headersList = {
      "Accept": "*/*",
      "apikey": "g_mA8lXkybObtTRAkhjAJjBJXKRgdvI8"
     }
   
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: headersList
      });

      let data = await response.json()
      return NextResponse.json(data)
    } catch (error) {
      console.error('Error:', error);
      return error
    }
  }else{
    return NextResponse.json({"messege":"can't got parametres"})
  }
  }