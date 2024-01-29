---
aside: false
---
<script setup lang="ts">
import MarkdownEditor from '/components/MarkdownEditor.vue';
</script>

# Neue Seite erstellen

Hier kannst du eine neue Seite erstellen. Aufgrund der Architektur dieser Webseite können diese allerdings nicht automatisch hinzugefügt werden. Hier eine kleine Anleitung. Bei Fragen, fragen :)

Euer Wiki Master Lenni

---

Inhaltsverzeichnis:

[[TOC]]

## Wiki Datei schreiben

Das Wiki besteht aus Textdateien im Markdown Format. Am Ende dieser Seite ist ein Fenster, in dem du Markdown schreiben kannst, mit eingebauter Vorschau.

### Bilder

Wenn die Seite Bilder enthalten soll, müssen diese mit diesem Pfad eingebunden werden: `/images/<DeinBildName.Dateiendung>`. Also zum Beispiel `/images/zwerge.jpg`.

## Datei herunterladen

Dieser Markdown Editor hat ein kleines "Save" Icon in der oberen Leiste, im linken Teil ganz rechts (etwa mittig über dem Vorschaufenster). Damit kann die geschriebene Datei einfach heruntergeladen werden.

## Datei hochladen

Du kannst Dateien auf zwei Wegen einreichen: Direkt über GitHub, oder über MS Teams. Bei MS Teams erledigen wir alles für dich (dauert unter Umständen entsprechend länger), bei GitHub musst du selber etwas Hand anlegen (komplexer, aber schneller).

### Methode 1: Direkt hochladen über GitHub

Hierfür brauchst du einen [GitHub](https://github.com/) Account. Wenn du keinen hast, [erstelle einen](https://github.com/signup).

Schreibe mir (Lennart) deinen Account Namen (über WhatsApp, Teams, etc.), damit ich dich als Mitbearbeiter zum [Repository](https://github.com/Lenni009/Studioprojekt2024) hinzufügen kann.

Wenn das getan ist, kannst du die Dateien wie folgt hochladen:

1. Klicke auf den `pages` Ordner
2. Klicke oben rechts auf "Add file" und wähle "Upload files"
3. Dann einfach per drag'n'drop deine heruntergeladene Datei hochladen
4. Auf "Commit changes" drücken

Deine Datei wird jetzt zum Repo hinzugefügt. Sie wird allerdings nicht automatisch in der linken Seitenleiste angezeigt, dafür muss die `sidebar.ts` Datei im `.vitepress` Ordner bearbeitet werden. Hier kannst du einfach einen bestehenden Eintrag kopieren und entsprechend anpassen. Der `link` muss dem hochgeladenen Dateinamen (ohne Dateiendung) entsprechen.

Wenn die Seite Bilder hat, müssen diese in den `public/images` Ordner hochgeladen werden. Auch hier einfach zum Ordner navigieren, auf "Add file" -> "Upload files" drücken, und die Bilder hochladen.

Wenn du dir unsicher bist, frag gerne nach!

### Methode 2: Auf MS Teams hochladen

Auf Teams gibt es im Ordner `Redaktion/Worldbuilding Wiki` einen "Wikiseiten" Ordner. Hier kannst du einfach deine Datei hochladen, und jemand wird sie dann früher oder später für dich auf GitHub hochladen. Falls die Wikiseite Bilder hat, erstelle bitte einen Unterordner, in dem die Datei und alle Bilder enthalten sind.

## Nützliche Tools

Ein paar KI Tools, falls man die Kreativität zu Hause vergessen hat. Alle sind kostenlos, manche brauchen aber einen Account auf der jeweiligen Plattform.

[DeepL Write](https://www.deepl.com/write)
: Textverbesserungs-KI (Kein Account benötigt)

[ChatGPT](https://chat.openai.com)
: Braucht denke ich keinerlei Erklärung (Account benötigt)

[Bing AI](https://www.bing.com/search?q=Bing+AI&showconv=1)
: Quasi ChatGPT ohne Anmeldung (Kein Account benötigt, hat allerdings nur 4 Antworten pro Konversation ohne Anmeldung. Mit Anmeldung hat es 5. Teams Login funktioniert nicht.)

[Bing Images](https://www.bing.com/images/create?FORM=IRPGEN)
: Bildgenerator von Microsoft (Anmeldung benötigt, Teams Login funktioniert nicht, 15 Prompts pro Tag)

[Adobe Firefly](https://firefly.adobe.com/)
: Bildgenerator von Adobe (Account benötigt, Schulaccount funktioniert, unendlich Prompts)

<MarkdownEditor />

