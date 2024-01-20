export declare class EmailService {
    private transporter;
    constructor();
    sendPasswordResetEmail(email: string, resetToken: string): Promise<void>;
}
