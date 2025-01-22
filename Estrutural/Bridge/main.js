import Color from "./Color.js";
import Message from "./Message.js";
import Text from "./Text.js";
import SMTC from "./StaticMessageTextColor.js";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var title = new Text("Bridge");
var explicacao = new Text("Bridge ocorre quando uma classe de seu sistema interage com " +
    "outra classe alojada entre seus atributos (ocupando um espaço de variável/caracteristica). <br>" +
    "Desta forma ao invés de criar diferentes classes com variáveis semelhantes mas com valores " +
    "ou comportamentos distintos, você pode criar um espaço para esta característica como variável " +
    "e criar então diferentes classes que representem apenas esta caracteristica. <br>" +
    "Assim, você pode criar inumeras combinações sem criar inumeras classes.");

var c1 = new Color("White");
var c2 = new Color("Black");

var message1 = new Message(title, c1);
var message2 = new Message(explicacao, c2);

message1.exibir(header);
message2.exibir(msg1);

var message3 = new SMTC("Apesar deste texto ser exibido normalmente para o usuário final, sua " +
    "classe está altamente enraizda em si mesma, e sua cor e seu texto estão predefinidos de forma que " +
    "seria necessário mudar suas variáveis para alterá-los, e isto acarretaria " +
    "em perder sua configuração atual, enquanto a mensagem e título acima podem emprestar sua cor " +
    "ou mensagem pois são apenas variáveis, e a classe mensagem que os exibe já está pronta, sem " +
    "necessidade da criação de outra combinação redundante.");

message3.exibir(msg2);

/* Bridge ocorre quando uma classe de seu sistema interage com outra classe alojada entre seus
atributos (ocupando um espaço de variável/caracteristica). Desta forma ao invés de criar
diferentes classes com variáveis semelhantes mas com valores ou comportamentos distintos, 
você pode criar um espaço para esta característica como variável e criar então diferentes
classes que representem apenas esta caracteristica. Assim, você pode criar inumeras combinações
sem criar inumeras classes.
Ex:
Para intergir com diferentes Sistemas Operacionais seu software poderia utilizar classes como
'Config-Som-Windows', 'Config-Som-Linux', 'Config-Som-Apple', 
'Config-Brilho-Windows', 'Config-Brilho-Linux', 'Config-Brilho-Apple', e este número aumentaria a cada 
nova configuração e se múltiplicaria a cada novo sistema operacional.
O bridge permite salvar apenas uma classe para cada configuração (Brilho, Som...), 
e apenas uma classe para cada novo Sistema Operacional (Linux, Windows...), 
e fazer suas combinações dinâmicamente.
*/