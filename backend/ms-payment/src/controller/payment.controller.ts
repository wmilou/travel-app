import { PaymentService } from "../service/payment.service";

export class PaymentController {
    private service: PaymentService;

    constructor({ service = new PaymentService() }) { this.service = service; }

    helloWorld(): string {
        return this.service.helloWord();
    }
}