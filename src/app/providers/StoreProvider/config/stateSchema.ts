import { UserSchema } from '@/entities/User/models/types/UserSchema.ts';

export interface StateSchema {
    user: UserSchema;
}

export type StateSchemaKey = keyof StateSchema;
