import ProfileFacebook from "./ProfileFacebook.js";
import ProfileLinkedIn from "./ProfileLinkedIn.js";
import ProfileInstagram from "./ProfileInstagram.js";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var title = "Template Method";
var explicacao = "&nbsp Template Method é uma técnica que dá às classes filhas apenas parte " +
    "da responsabilidade de implementar o algoritmo da classe pai. Assim o algoritmo e seus métodos " +
    "SÃO chamados inteiramente na super classe, mas quando uma estapa especifica for implementada na sub " +
    "classe ela executa seu papel e faz de sua forma o passo seguinte, até que devolva o " +
    "algoritmo para a super classe ou o encerre.<br>" +
    "&nbsp Ex: Uma mesma Super Classe ProfileAbstractClass foi responsável por confeccionar " +
    "estes cartões de redes sociais, por isso seu comportamento é parecido. O que difere cada um "+
    "além das cores, é que as informações exibidas que diferem foram extraídas em métodos próprios das " +
    "Subclasses ProfileFacebook, ProfileInstagram e ProfileLinkedIn que são implementados apenas " +
    "nas Subclasses, portanto puderam comportar-se independentemente.<br><br>";

header.innerHTML = title;
msg1.innerHTML = explicacao;

var facebookProfile = new ProfileFacebook();
var linkedInProfile = new ProfileLinkedIn();
var instagramProfile = new ProfileInstagram();

msg2.insertAdjacentElement("beforeend", facebookProfile.buildProfile());
msg2.insertAdjacentElement("beforeend", linkedInProfile.buildProfile());
msg2.insertAdjacentElement("beforeend", instagramProfile.buildProfile());