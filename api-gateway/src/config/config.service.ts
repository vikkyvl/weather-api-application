class ConfigService{
    constructor(private env: string | undefined) {}

    public isProduction(): boolean {
        return this.env === 'production';
    }

    public getEnv() {
        return this.env || 'development';
    }

    public getBrockerUri() {
        return process.env.BROKER_URI ?? 'amqp://guest:guest@127.0.0.1:5672';
    }

    public getPort(){
        return process.env.PORT ?? 3000;
    }
}

const configService = new ConfigService(process.env.NODE_ENV);
export { configService };