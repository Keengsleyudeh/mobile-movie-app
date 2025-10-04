import { Account, Client, Databases, Functions, ID, Query, Storage, TablesDB } from 'react-native-appwrite';

const projectId = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
const endpoint = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;
const databaseId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const tableId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_TABLE_ID!;

// Initialize the Appwrite client
const client = new Client();

client
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!) // Your Appwrite Endpoint
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!); // Your project ID from Appwrite Console

// Initialize services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);



const tablesDB = new TablesDB(client);


export async function updateSearchCount(query: string, movie: Movie) {

        try {
            const results = await tablesDB.listRows({
                databaseId: databaseId,
                tableId: tableId,
                queries: [
                    Query.equal('searchTerm', query),
                ]
            });

            console.log('Search results:', results);

        if (results.rows.length > 0) {
            const existingMovie = results.rows[0];

            await tablesDB.updateRow({
                databaseId: databaseId,
                tableId: tableId,
                rowId: existingMovie.$id,
                data: {
                    count: existingMovie.count + 1,
                }
            });
        } else {
            await tablesDB.createRow({
                databaseId: databaseId,
                tableId: tableId,
                data: {
                    searchTerm: query,
                    count: 1,
                    movie_id: movie ? movie.id : null,
                    title: movie ? movie.title : null,
                    poster_url: movie ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
                },
                rowId: ID.unique(),
            });
        }
    } catch (error) {
        console.error('Error updating search count:', error);
        throw error;
    }
}


export async function getTrendingMovies(): Promise<TrendingMovie[] | undefined> {
    try {
        const results = await tablesDB.listRows({
            databaseId: databaseId,
            tableId: tableId,
            queries: [
                Query.orderDesc('count'),
                Query.limit(5),
            ]
        });

        return results.rows.length > 0 ? results?.rows as unknown as TrendingMovie[] : undefined;
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        throw error;
    }
}



export { ID };
export default client;