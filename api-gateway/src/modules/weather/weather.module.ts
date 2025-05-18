import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'WEATHER_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: [process.env.BROKER_URL || 'amqp://guest:guest@localhost:5672'],
                    queue: 'weather-service',
                    queueOptions: { durable: false },
                },
            },
        ]),
    ],
    controllers: [WeatherController],
    providers: [WeatherService],
})
export class WeatherModule {}


