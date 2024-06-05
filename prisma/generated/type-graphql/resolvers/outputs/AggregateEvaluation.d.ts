import { EvaluationAvgAggregate } from "../outputs/EvaluationAvgAggregate";
import { EvaluationCountAggregate } from "../outputs/EvaluationCountAggregate";
import { EvaluationMaxAggregate } from "../outputs/EvaluationMaxAggregate";
import { EvaluationMinAggregate } from "../outputs/EvaluationMinAggregate";
import { EvaluationSumAggregate } from "../outputs/EvaluationSumAggregate";
export declare class AggregateEvaluation {
    _count: EvaluationCountAggregate | null;
    _avg: EvaluationAvgAggregate | null;
    _sum: EvaluationSumAggregate | null;
    _min: EvaluationMinAggregate | null;
    _max: EvaluationMaxAggregate | null;
}
