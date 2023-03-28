declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TOKEN: string,
            GOOGLE_API_TOKEN: string,
            OPENAI_API_TOKEN: string
        }
    }
}

export {}