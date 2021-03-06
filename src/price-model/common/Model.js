import { keyParameters } from 'price-model/common/parameter/ParameterUtils';

export default class Model {

  constructor(assetClass, name, parameters, priceFunction) {
    this.assetClass = assetClass;
    this.name = name;
    this.parameters = keyParameters(parameters);
    this.priceFunction = priceFunction;
  };

};