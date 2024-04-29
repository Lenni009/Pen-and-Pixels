<script setup lang="ts">
  import CharacterSheet from './code/components/CharacterSheet.vue';
  import { schurke, barde, berserker, magier } from './characterSheetData';
</script>

# Geschichte der Abenteuerer bisher

## Was bisher geschah

Unsere vier tapferen Abenteurer, der Berserker **Fridericus Knochenbrecher**, der Schurke **Morzan Schattenläufer**, der Barde **Harald Scheißgesang** und der Zauberer **Angmar Nazaroth**, trafen einst in einem kleinen Dorf am Rande zwischen Midgard und Fellheim aufeinander. Sie alle wurden dorthin gesandt, um für die Vorgesetzten ihres jeweiligen Volkes Nachforschungen durchzuführen um komische und merkwürdige Ereignisse zur ergründen. Schnell wurde ihnen klar, dass sich um schwarze Magie handelt, die droht, die Welt zu zerstören. Warum jene Person oder Gruppe dies tut, ist ihnen noch nicht bekannt. Sie kennen nur ihre Aufgabe: Haltet die Bedrohung auf und rettet die Welt.

So schlugen sich die tapferen Abenteurer durch harte Quests, schwere Kämpfe und mussten das eine oder andere Mal mit dem Schicksal um ihr Glück würfeln.
Der Barde **Harald Scheißgesang**, überfordert mit dem “ganzen Welt retten”, entschied sich dazu, sein Glück anderswo zu suchen und brach ins Ungewisse auf.
Nach weiten Wegen und vielen großen und kleinen Ablenkungen konnten die drei restlichen Abenteurer die Quelle allen Bösen finden und stellten sich so dem apokalyptischen Hexenmeister **Merlinus der Schwarze** in seiner Düsterburg. Als Mitglied des Kultes des Drachen versuchte er die totgeglaubten Drachen wiederzuerwecken. Es entfachte ein epischer Kampf, dem die Abenteurer aber leider nicht gewachsen waren. Der Niederlage nah, entschieden sich die Abenteuer sich fürs Erste zurückzuziehen, das Schicksal der Welt lag immerhin auf ihren Schultern. Den Hexenmeister konnten sie fürs Erste von seinen Plänen abhalten, sodass auch er sich neu organisieren musste, um seinen teuflischen Plan umzusetzen.
Leider war Angmar, der Magier ihrer Gruppe zu sehr verletzt und der Berserker und Schurke entschieden sich dazu, ihn zurückzulassen, um ihre eigene Haut zu retten. Der Horror in seinen Augen, als seine Kameraden ihn in Stich ließen, hatte einen bleibenden negativen Effekt auf die Überlebenden. Vor allem seine letzten Worte hallten in ihren Köpfen: **“Lasst mich nicht in Stich, ihr Narren.”**

Zur Zeit befinden sich die gerade so am Leben erhaltenen Abenteuer in der Taverne der **Frau Bogi** in Krähenberg. Nur noch zu zweit versuchen der Berserker **Fridericus Knochenbrecher** und der Schurke **Morzan Schattenläufer** neuen Mut zu sammeln, um die Welt ein weiteres Mal vor den Drachen zu beschützen.

## Die Abenteurer

### Der Berserker
<CharacterSheet :data="berserker" />

### Der Schurke
<CharacterSheet :data="schurke" />

### Der Barde
<CharacterSheet :data="barde" />

### Der Magier
<CharacterSheet :data="magier" />
