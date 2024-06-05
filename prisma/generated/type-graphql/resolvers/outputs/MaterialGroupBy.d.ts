import { MaterialAvgAggregate } from "../outputs/MaterialAvgAggregate";
import { MaterialCountAggregate } from "../outputs/MaterialCountAggregate";
import { MaterialMaxAggregate } from "../outputs/MaterialMaxAggregate";
import { MaterialMinAggregate } from "../outputs/MaterialMinAggregate";
import { MaterialSumAggregate } from "../outputs/MaterialSumAggregate";
export declare class MaterialGroupBy {
    id: string;
    name: string;
    quantity: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MaterialCountAggregate | null;
    _avg: MaterialAvgAggregate | null;
    _sum: MaterialSumAggregate | null;
    _min: MaterialMinAggregate | null;
    _max: MaterialMaxAggregate | null;
}
