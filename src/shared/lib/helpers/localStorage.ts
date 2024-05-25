export namespace LocalStorageService {
    export function save<T>(key: string, data: T): Promise<void> {
        return new Promise((resolve) => {
            localStorage.setItem(key, JSON.stringify(data));
            resolve();
        });
    }

    export function get<T = unknown>(key: string): T | undefined {
        const item = localStorage.getItem(key);
        if (item != null) {
            try {
                return JSON.parse(item);
            } catch {
                return undefined;
            }
        }
        return undefined;
    }

    export function remove(key: string): Promise<void> {
        return new Promise((resolve) => {
            localStorage.removeItem(key);
            resolve();
        });
    }

    export function clear(): Promise<void> {
        return new Promise((resolve) => {
            localStorage.clear();
            resolve();
        });
    }
}
