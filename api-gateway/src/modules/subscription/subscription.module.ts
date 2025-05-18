import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {SubscriptionController} from "./subscription.controller";
import {SubscriptionService} from "./subscription.service";
import { ConfirmationService } from './confirmation.service';
import { ConfirmationController } from './confirmation.controller';
import { UnsubscriptionController } from './unsubscription.controller';
import { UnsubscriptionService } from './unsubscription.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'SUBSCRIPTION_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: [process.env.BROKER_URL || 'amqp://guest:guest@localhost:5672'],
                    queue: 'subscription-service',
                    queueOptions: { durable: false },
                },
            },
        ]),
    ],
    controllers: [SubscriptionController, ConfirmationController, UnsubscriptionController],
    providers: [SubscriptionService, ConfirmationService, UnsubscriptionService],
})
export class SubscriptionModule {}
