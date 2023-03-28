import { BookingService } from "../service/booking.service";

export class BookingController {
    private service: BookingService;

    constructor({ service = new BookingService() }) { this.service = service; }

    helloWorld(): string {
        return this.service.helloWord();
    }
}