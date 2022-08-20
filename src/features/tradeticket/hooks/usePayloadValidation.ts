
import { calculationPayloadSchemaValidation, executePayloadSchemaValidation } from '../schema';


export enum ValidationType {
    CalculationRequestPayload = 'calcPayload',
    ExecutionRequestPayload = 'execution',
}

interface ValidateReturnProps {
    valid: boolean;
    error?: Error;
}
interface ReturnProps<T> {
    validatePayload: (payload: T, validationType: ValidationType) => Promise<ValidateReturnProps>;
}

export const usePayloadValidation = <T,>(): ReturnProps<T> => {
    const validatePayload = async<T,>(payload: T, validationType: ValidationType): Promise<ValidateReturnProps> => {
        let valid = false;
        let error = undefined;
        try {
            switch (validationType) {
                case ValidationType.CalculationRequestPayload:
                    valid = Boolean(await calculationPayloadSchemaValidation.validate(payload));
                    break;
                case ValidationType.ExecutionRequestPayload:
                    valid = Boolean(await executePayloadSchemaValidation.validate(payload));
                    break;

                default:
                    break;
            }
        } catch (err) {
            error = err as Error;
        }
        return { valid, error }
    }
    return { validatePayload }
}
