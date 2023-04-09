export async function fetchData(url: string): Promise<any> {
  try {
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error(
        `An error was returned (${data.status} ${data.statusText})`
      );
    }
    return await data.json();
  } catch (error) {
    console.error(
      `There was an error while fetching data from ${url}: ${error.message}`
    );
    throw error;
  }
}
