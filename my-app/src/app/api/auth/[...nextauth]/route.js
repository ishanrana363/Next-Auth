import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", required: true },
                password: { label: "Password", type: "password", required: true },
            },
            async authorize(credentials) {
                const {email, password} = credentials;
                if (!credentials) {
                    return null
                }
                if(email){
                    let newUser = users.find(user => user.email === email);
                    if(newUser) {
                        if(newUser.password === password){
                            return newUser;
                        }
                    }
                }
                return true

            },
        })
    ],
})

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "qwerty456"
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "alicePass789"
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "bob.brown@example.com",
        password: "bobPassword987"
    },
    {
        id: 5,
        name: "Charlie Davis",
        email: "charlie.davis@example.com",
        password: "charlie12345"
    },
    {
        id: 6,
        name: "Diana White",
        email: "diana.white@example.com",
        password: "diana2021"
    },
    {
        id: 7,
        name: "Eve Adams",
        email: "eve.adams@example.com",
        password: "eve@secret"
    },
    {
        id: 8,
        name: "Frank Clark",
        email: "frank.clark@example.com",
        password: "frank@clark007"
    },
    {
        id: 9,
        name: "Grace Lee",
        email: "grace.lee@example.com",
        password: "graceful2020"
    },
    {
        id: 10,
        name: "Henry Walker",
        email: "henry.walker@example.com",
        password: "hwalker!123"
    }
];


export { handler as GET, handler as POST }