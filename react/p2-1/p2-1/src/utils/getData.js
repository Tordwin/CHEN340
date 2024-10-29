//https://solace.ist.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/
//https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/
//this is the base of my proxy to get the data!
const proxyServer = "https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/"

async function getData(endpoint) {
    const result = await fetch(`${proxyServer}${endpoint}`);
    return await result.json();
}

export default getData;