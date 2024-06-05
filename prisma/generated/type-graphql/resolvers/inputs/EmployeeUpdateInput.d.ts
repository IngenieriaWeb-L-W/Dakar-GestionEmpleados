import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EvaluationUpdateManyWithoutEmployeeNestedInput } from "../inputs/EvaluationUpdateManyWithoutEmployeeNestedInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EmployeeUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    hireDate?: DateTimeFieldUpdateOperationsInput | undefined;
    position?: StringFieldUpdateOperationsInput | undefined;
    department?: StringFieldUpdateOperationsInput | undefined;
    salary?: FloatFieldUpdateOperationsInput | undefined;
    hoursWorked?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    evaluations?: EvaluationUpdateManyWithoutEmployeeNestedInput | undefined;
}
