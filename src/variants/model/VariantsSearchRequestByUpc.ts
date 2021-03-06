import VariantsSearchRequestByBusinessId from './VariantsSearchRequestByBusinessId';
import PaginationQueryRequest from '../../model/PaginationQueryRequest';

export default interface VariantsSearchRequestByUpc extends VariantsSearchRequestByBusinessId, PaginationQueryRequest {
  upc: string;
  size?: number;
}
