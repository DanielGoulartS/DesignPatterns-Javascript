import BuilderExplanation from "./BuilderExplanation.js";
import BuilderElements from "./BuilderElements.js";
import Explanator from "./Explanator.js";

let explanator = new Explanator();

let builderExplanation = new BuilderExplanation(explanator);

let builderElements = new BuilderElements(explanator);

builderExplanation.buildTitle();
builderExplanation.buildExplanation();

builderElements.buildHeader();
builderElements.buildDisplay();

explanator.explain();

/*
Aprendi que javascript não aceita passagem de referências como parâmetros de funções, portanto
não foi possível passar explanator.title como parâmetro na função builderExplanation.buildTitle()
por exemplo, e nenhuma outra respectivamente. A solução é passar o objeto completo.
*/