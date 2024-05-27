export default Getdata = async (data) => {
    const url = new URL('https://api.tequila.kiwi.com/v2/search/');
    const apiKey = 'g_mA8lXkybObtTRAkhjAJjBJXKRgdvI8';
    const params = {
      'fly_from': data.flyfrom,
      'fly_to': data.flyto,
      'date_from': data.departure,
      'date_to': data.returndate
    };
  
    // Append parameters to the URL search params
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': apiKey
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return data
    } catch (error) {
      console.error('Error:', error);
      return error
    }
  };