import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput } from "../inputs/EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EvaluationUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    performance?: FloatFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    employee?: EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput | undefined;
}
