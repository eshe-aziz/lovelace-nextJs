// creating our own endpoint in next that is using POST

//creating a post:

export async function POST(request: Request) {
    const baseURL = process.env.BASE_URL;
    const body = await request.json();
    const {username, password} = body

    if(!username && !password) {
        return new Response("Username and password missing", {
            status: 400,
        });
    }

    try{
        const response = await fetch(`${baseURL}/auth/login`, {
            method: 'POST',
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await response.json()
        return new Response(JSON.stringify({data, message: "Successful login", status: 201}), {
            status:201
        });
    }   catch (error) {
        
        return new Response((error as Error).message, {
            status: 500,
        });
    }
}