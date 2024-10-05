export class AuthorService
{
    async getAllAuthors() : Promise<any[]>
    {
        const result = await fetch("http://localhost:5125/api/Author/GetAuthors", {cache: 'no-store'});
        const authors = result.json();
        return authors;
    }
}