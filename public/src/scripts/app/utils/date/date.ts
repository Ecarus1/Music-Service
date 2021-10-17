export class DateUtils {
    public static now(): Date {
        return new Date();
    }

    public static fromISO(dateISO: string): Date {
        return new Date(dateISO);
    }

    public static toISO(date: Date): string {
        return date.toISOString();
    }
}
