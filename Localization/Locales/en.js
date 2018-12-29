let locale_en =
{
	language_en: "English",
	language_fr: "Français",
	menu_home: "HOME",
	paragraph_1: "Welcome to my webpage!",
	paragraph_2: "Welcome, I'm Sandra and I'm a student in Localization at the <a href='https://www.unige.ch/en/university/presentation/' target='_blank'>University of Geneva.</a><br><br>Here, you'll find summaries of various course contents under Portfolio, as well as examples of the different labs we had to carry during the semester. Thank you for your visit!<br><br><br>Any questions? <a href='mailto:sandra.casas@etu.unige.ch'>Contact me!</a><br><br><br><br>Interested in the localization class? Have a look at the <a href='http://wadme.unige.ch:3149/pls/opprg/w_det_cours.debut?p_code_cours=BTM0912&p_plan_is=0&p_langue=1&p_frame=N&p_mode=PGC&p_annee=2018&p_suffixe=&p_grtri=9629' target='_blank'>description</a> of the course (available in French only).<br><br><br><br>Find out more about my Faculty <a href='https://www.unige.ch/fti/en/' target='_blank'>here.</a><br><img src='images/FTI_noir50.jpg' alt='Logo Faculty of Translation and interpreting' width='300' height='150'/>",
	paragraph_3: "Portfolio",
	paragraph_4: "<b>Summary:</b><br><br><a href='#paragraph_5'>Images localization</a><br><br><a href='#paragraph_8'>Website localization I</a><br><br><a href='#paragraph_11'>Introduction to programming</a><br><br><a href='#paragraph_14'>Software localization</a><br><br><a href='#paragraph_17'>Open source localization</a><br><br><a href='#paragraph_20'>Game localization</a><br><br><a href='#paragraph_23'>Mobile localization</a>",
	paragraph_5: "Images localization",
	paragraph_6: "<b><i>Theory</b></i><br><br>Images are a reflection of the culture in which they are published. They will change according to the countries, the regions, etc. Localization of images is a strategy that makes a firm's marketing more efficient.<br><br>There are four main types of images:<br><ul><li>Pixel images: they are defined by the position of the pixels that compose the image. Pixels are little dots of colors. If you modify the size of a pixel image, the quality will be affected negatively.<br><li>Flat images: they have only one layer. Basically, if there is a text on the image (technically one layer), it has been merged down with the image on the background (second layer), which means that the localization will be more difficult to conduct. The extensions of these images are .png, .jpgeg for example.<br><li>Multilayer images: in this case, the various layers are accessible and you'll be able to modify them separately. The extensions are .psd or .xcf for example.<br><li>Vector images: they are defined by mathematical formulas, they are more complex than pixel images in a sense. If their size is modified, the quality remains the same.</ul><br>=> Vector images and multilayer images are the easiest ones to localize, because the layers are accessible individually.<br>=> Flat images requires different tools and techniques to be localized.<br><br>There are different techniques that you can use:<br><ul><li>Contact the developer to ask for a multilayer image.<br><li>Use OCR (Optical Character Recognition) technology. => Difficult and does not provide good results<br><li>Modify the image manually using an image editor. => This technique works well, but be sure to be as precise as possible when using the brush tool for example, otherwise the final quality will be damaged and the modifications will be too visible.</ul><br>Another difficulty when localizing images is to find the right font. Depending on the companies, you'll be told which one you should use. Beware that some fonts may not support all UNICODE characters. There are tools that are able to recognize the font used, like WhatTheFont! by MyFonts. This tool works well for classical fonts, but if a more unique one is used, it may not provide excellent results.<br><br>Finally, you might have to localize screenshots. Ideally, they should be replaced with an equivalent screenshot of the localized software, game, app, etc. as in the example below.<br><br>",
	paragraph_7: "<b><i>Lab</b></i><br> In this lab, we learned to use GIMP, which is a program that allows the user to modify images, to create GIFs (like the one below), etc. We learned to blur blemishes, to navigate through the various layers of an image and to create an animation. In addition, we saw that sometimes we don't have access to the different layers, so we need to use other tools like a colorpicker and a brush to cover the text and then rewrite the text in another language. It was interesting to learn how to modify images, because it can be useful in our daily lives and it shows that it is not necessarily restricted to designers etc.<br><img src='images/animated_dog_localization.gif' alt='GIF I learned to localize images!' width='250' height='250'/>",
	paragraph_8: "Website Localization I",
	paragraph_9: "<b><i>Theory</b></i><br><br>A common way to localize a website for example is to make the modifications in the HTML files. HTML stands for HyperText Markup Language. The root element is &lthtml&gt, each HTML file begins with this tag.<br>Tags define a text that is shown on a web browser. For example : &lttitle&gtWeb localization I&lt/title&gt ==> The tags here tell us that the text between them is a title. There is always an opening tag and a closing tag, except for some stand-alone tags, like the one for images: &ltimg&gt.<br><br>There are three main types of websites:<ul><li>Static web site: its main components are HTML files. They can also have images and style sheet files (CSS).<ul><li>Absolute paths: the location of the files is always the same. Don't use locations like C:/Users/... for Internet pages because they depend on your machine. If you try to access it from another device, it won't work.<br><li>Relative paths to the document: you tell the machine to get into a folder using /. Example: images/leaves/leaf.png . If you want the machine to exit folders, first use ../ for each element you want to exit. Example: ../../../images/leaves/leaf.png<br><li>Relative paths to the root directory: always use / first. Example: /images/leaves/leaf.png</ul><li>Semi-dynamic website: complements to HTML files like JavaScript, ShockWave, etc. They provide dynamism.<br><li>Dynamic website: it uses container, template files that are updated thanks to the content of various databases. The main resource is a database, not an HTML file. Moreover, the design is separated from the content, which makes the content modifications easier.</ul><br>How do you localize static websites?<br><ul><li>Receive and deliver HTML<br><li>Use CAT Tools to translate the content of the HTML files => CAT Tools are the best option if you want to make consistent translations for your client for example. Moreover, you won't risk to damage the code while translating.<br><li>Create links between parallel pages by language<br><li>Localize graphic contents like images</ul><br>CSS - Cascading Style Sheet: this type of files allows you to control the format and the display of various elements like:<br><ul><li>colors and background<br><li>fonts and text<br><li>spacing<br><li>element visibility<br><li>elements positioning and sizing</ul>Thanks to this, the style is isolated from the content and when you modify anything regarding the style, it applies to whole website.<br><br>Example CSS file:<br> <img src='images/exampleCSS.png' alt='example CSS file' width='350' height='250'/>",
	paragraph_10: "<b><i>Lab</b></i><br><br>In the first part, we learned to modify a .htm file. We had to add a second language to the website and translate a paragraph using SDL Trados Studio. It was very interesting to see how we can introduce another language in the code, which only requires a few steps unlike what I thought at first. Moreover, we had to modify some paths for the CSS files. As we add a folder for the French file, we had to modify the paths accordingly.<br> <img src='images/webI.png' alt='code for the creation of languages buttons' width='550' height='350' /><br><img src='images/web-programming.png' alt='display web page with languages buttons' width='550' height='350' /><br><br>In the second part, we had to modify the style and the content of a website. Among others, we changed the color of the header for the pink of the Unige using ColorZilla, modified the images, created a new favicon using Favicon CC. This part was quite easy, as I had already done almost the same lab during my Bachelor degree. It could have been interesting to modify the CSS of another type of website for example.<br> <img src='images/web-programmingII.png' alt='display modified website' width='550' height='250' />",
	paragraph_11: "Introduction to programming",
	paragraph_12: "<b><i>Theory</b></i><br><br>Computer programming can be defined as the process of creating computer software using programming languages.<br>What are programming languages? They are artificially created languages. Their aim is to allow the communication between the users and the machines. They also have specific grammar and vocabulary such as natural languages. However, they are not similar to Markup languages like HTML: markup languages do not give any instructions to the machine.<br><br>Examples of popular programming languages:<br><ul><li>Java<li>C, C++, C#<li>Python<li>Pascal</ul>Example of C# code in the arcade game Garkanoid:<br><img src='images/Ccode.png' alt='Code lines in C#' width='550' height='350' /><br><br>In order to make the code readable for a computer, you need to compile the code. Compilation can be defined as the transformation of files that contain source code into files written in binary code (most simple language that a computer can process). Once these files are compiled, they should be directly executed by a computer/machine.<br>Several tools can be useful:<br><ul><li>To write the code<ul><li>Advanced text editor like Notepad++<li>User-friendly interface, easy to use, supports big files<li>IDE (Integrated Development Environment) like MS Small Basic => You can see directly what your code looks like once compiled, you don't need to use another program. Example: MS Small Basic</ul><br> <img src='images/Small-basic.png' alt='code lines for movements in MS Small Basic' width='400' height='350' /> <img src='images/Small-basic-1.png' alt='Turtle moving in a square form' width='350' height='350' /><br><br><li>To compile the code:<br><ul><li>compiler: transforms the source code into machine language (binary code)<li>IDE : compiler is integrated => May be difficult to use at first. Use user guides and take some time to explore the different files before starting your job.</ul></ul>Example: Visual Studio<br><img src='images/Compiler-Visual-Studio.png' alt='display Visual Studio line code and compiler on top, with home menu of the game' width='550' height='330' />",
	paragraph_13: "<br><b><i>Lab</b></i><br><br>In this lab, we used Microsoft Visual Studio to localize the game Pacman. We had to find the localizable text in the various files and translate it. At first, it was quite difficult to understand how the program works, where to find the information, etc. We also had to make sure that no elements were overlapping after the translation. In addition to this, we had to localize some images like the dots, the phantoms, etc. We also had to change the background color and change the name of the game. These last steps were not very difficult, but required to remember what we learned during the localization of images class and also some research in order to find where the necessary modifications had to be done. It was a difficult lab overall, but very satisfying once completed.<br><img src='images/Introduction-programming.png' alt='display Pacman localized in French with green background and smiling red ghost' width='350' height='450' />",
	paragraph_14: "Software localization",
	paragraph_15: "<b><i>Theory</b></i><br><br>If you want to localize a software, there are various elements that you'll need to deal with:<ul><li>GUI (Graphic User Interface)<ul><li>Menus<li>Dialog boxes<li>Error messages<li>Progress bars<li>Buttons<li>Licenses</ul><li>Help System<li>Documentation<li>Screenshots<li>Audio</ul>Different techniques can be used depending on the type of software you've been given.<br>If you have an uncompiled program, there are two possibilities:<ul><li>You can work with the translatable text directly in a CAT Tool, because it is seperated from the rest of the code. Unfortunately, you may lack of context to translate the different strings. In fact, maybe you won't always translate -Quit- by -Quitter- depending on the context, but you won't be able to check to make this decision in this case.<li>You don't have access to the translatable text directly, it is incorporated in the source code. You won't be able to use a CAT Tool directly. You'll have to use filters and an extracter to tell the machine which strings need to be extracted and therefore translated. Moreover, you might damage the code as you'll work directly in the source code environment. However, you do have access to some context in this case.</ul>If you have a compiled program this time, you can use localization tools like SDL Passolo, Alchemy Catalyst, Lingobit Localiser or Sisulizer. You won't have to localize in the source code, the process will be the same as the first one with an uncompiled program.<br><br>You might encounter the following elements during the localization process:<ul><li>variables: they are placeholders for numbers or some text that will be filled in a message when the program is running. (Wolff, 2010). Do not translate them and respect the spaces around them.<li>escaping characters: each programs use special characters that have specific roles in the program's grammar. If you want to use them anyway in your text, you need to tell the machine that this character does not play his role, but is simply graphical. That's what is called escaping a character. Do not modify them either unless you are forced to.<li>hot keys: You need to press the key &quotAlt&quot in order to see them. You'll see a letter underlined, that's the hot key. When you localize your file, just incorporate &quot&&quot before the letter that you want to use as a hot key. Try to use the same letters as the source file. But be careful, you cannot use the same hot key twice at the same level. For example, in the GUI of Notepad++, you cannot use E for both &quotEncodage&quot and &quotExécution&quot. Finally, try not to use special characters and characters with descenders as hot keys.<li>shortcuts: they are &quotkey[s] or combination of keys on a computer keyboard programmed to perform a specific function when pressed.&quot (Merriam-Webster 2018) You might have to localize them in some cases.</ul>Don't forget to test once you're done translating! In fact, even if you translated well, there can be issues with the display of elements for example, space and size are common localization problems. These issues cannot be seen during the translation process, so the testing step is essential.",
	paragraph_16: "<br><b><i>Lab</b></i><br><br>In this lab, we had to localize the software Paint. We used the program SDL Passolo to perform the translation. We had to be careful to use the right terminology and to check that there were no sizing or spacing issues, especially in dialog boxes. We also had to localize some keyboard shortcuts, changing those who needed to be and simply copying the other ones. For example, the shortcut to write in bold in French is &quotCtrl+G&quot whereas it's &quotCtrl+B&quot in English. This lab was useful because we were able to test SDL Passolo for the first time and we were able to put the theory above into practice. It could have been interesting to either localize a second program or use a different program than Passolo to localize Paint. <img src='images/passolo-software-l10n.png' alt='display translation from French into English in SDL Passolo' width='950' height='350' />",
	paragraph_17: "Open source localization",
	paragraph_18: "<b><i>Theory</b></i><br><br>When talking about Open source, the following terms are important to know:<ul><li>Freeware: Software that is free for the users, like OpenOffice.<li>Open Source: The code is available for the users, like the game SuperTuxKart.<li>FOSS: Free and Open Source Software, like the image editor GIMP.<li>Proprietary Software: the source code is not available and the price depends on the software. iTunes is free for example, whereas you have to pay for SDL Trados Studio.</ul>The advantages of such softwares:<ul><li>Altruism<li>More learning possibilites ==> if you have an open source software, you can use it to extend your knowledge of coding for example.<li>You have more control over the tool<li>You can change some features according to your needs, etc.<li>You can find help and support in fora and enthusiastic users, the community of users is usually more active on the Internet<li>Normally, this type of software is free</ul>The disadvantages:<ul><li>Professional support may not be available when you need it, as they don't necessarily have a client support team.<li>Continuity is not guaranteed in each case<li>If people with responsabilities leave the project, it might be abandoned<li>People involved in the project are not always aknowledged for their work and implication, so they might be discouraged to continue their work<li>The program itself might be chargeless, however every tool you need to make it run is not free - Internet connexion, computer, electricity, etc.</ul><br>Gettext tool: with this tool, you can extract the localisable text directly from the source code. However, we must indicate which strings need to be internationalized by adding the following characters at the beginning: (_ and this one at the end: )<br>=> Conversion to MO - Machine Object:<ul><li>It is the binary format where the strings are stored<li>When the program will be running, it will look for the MO files in order to show them to the user.</ul><br>PO format:<ul><li>Most popular bilingual file format in the FOSS localisation world<ul><li>POT: Portable Object Template - it's the format created by the gettext tool which will be sent to the coordinators of the different language communities.<li>PO: Portable Object - Bilingual file, each language will have its one file.</ul></ul>",
	paragraph_19: "<br><b><i>Lab</b></i><br><br>First, we used Virtaal to translate the text of the game. The interface is pretty simple and easy to use:<br><img src='images/Virtaal.png' alt='Display of translation in Virtaal from English into French' width='750' height='350' /><br> Then we had to register our voice in order to localize the audio part of the game using the program Audacity. We had to focus on sound quality and also on the tone we used when reading the strings out loud. This was a good exercise to show that there is not only written elements that need to be localized, but also sounds for example.",
	paragraph_20: "Game localization",
	paragraph_21: "<b><i>Theory</b></i><br><br>Game localization requires skills from other localization types such as:<ul><li>software localization<li>image/graphic localization<li>document translation<li>dubbing, voiceover, subtitling<li>loads of QA testing</ul><br>There are different levels of game localization:<ul><li>no localization: nothing is localized in the game<li>&quotbox and docs&quot localization: the packaging and the manual are localized, but the game itself isn't. This type was used a lot, however it is not the case today anymore.<li>partial localization: the whole game is localized, except the sounds. In this case, there will be subtitles (that will need to be translated)<li>full localization: everything related to the game is localized.</ul><br>A game localizer also have to deal with cultural adaptation as for image localization. We can sum up the idea with the term contextual proximity: &quotconcept that the closer a content element approaches the original context in person, place, time, and or form, the greater the potential for cultural sensitivity.&quot Basically, if you have to localize a game about the Civil War in Spain, maybe Spanish players will not react as French or German players for example, because they live in an environment that is still impacted by this war and they are still living with its consequences. These are elements that need to be taken into account.<br><br>Usually, games are rated according to age ratings. These ratings will depend on the countries where the game will be released.<br><img src='images/Age-ratings.png' alt='age ratings from Europe - PEGI' width='500' height='250' /><br><br>As for software localization, you'll need to perform QA testing tasks to check the quality of the final product. There are three main types of testing:<ul><li>linguistic testing: language-related aspects of the application. There are some guidelines that must be followed in certain cases, for example that &quotFile&quot must be tanslated as &quotFichier&quot.<li>functionality testing: checking that each functionality of the game works, that no possible links are broken, no code problems, etc.<li>cosmetic testing: checking that the visual content is conform to the expactations of your client => no text overlaping, etc.</ul>",
	paragraph_22: "<br><b><i>Lab</b></i><br><br>In this lab, we had to test the game SuperTuxKart. We had to play and make a screenshot every time we saw an error which could be related to the language, to the display of elements, etc. and to highlight the error on the screenshot like this for example:<br> <img src='images/game-l10n.png' alt='Text in French with an orthographical error marked in red' width='450' height='350' /><br><br>Once all the screenshots were done, we had to number them and incorporate them in a bug report. Basically, this report has the following categories:<ul><li>unique identify number <li>location of the bug in the game <li>description of the bug <li>original localised text <li>corrected text <li>status <li>notes <li>image <li>TAUS error type</ul><img src='images/Bug-report.png' alt='Example of bug report with the various categories' width='1050' height='250' /><br><br>This lab was very interesting and fun to do. We had to check everything on the screen and not just to focus on the linguistic aspect for example.",
	paragraph_23: "Mobile Localization",
	paragraph_24: "<b><i>Theory</b></i><br><br>There are two main Mobile Operating Systems: Android and iOS<br><br>Mobile applications are in a permanent beta state, which means that they are always in a test-phase. They don't have a final version in a sense, because they are continuously modified, updated, etc. In this domain, time matters more than quality - you need to publish your app before someone else, even if it's not working perfectly yet. Similarly, the classic sotware development cycle is not followed anymore, as the process is too long and contains too many steps among others. Finally, apps are mainly used for entertainment, going from games to videos or podcasts for example. Sometimes, certain apps are only used for a short period of time, often a specific event like the UEFA World cup or the Olympic Games, etc.<br><br>There are many differences of features between mobile and desktop when talking about human-machine interactions:<ul><li>Desktop systems: clicks, speech recognition, keyboard input, limited tactile elements (touchpad)<li>Mobile: tactile elements, accelerometer, keyboard input, speech recognition</ul>In addition, the following elements are specific to mobile apps:<ul><li>Size limitations: smartphones and tablets have limited hardware and processing resources. You need to be careful about the display of your elements so that it does fit the different screen types for example<li>Setup time: it is way quicker than any other software, it takes only a few minutes<li>Functionality: you don't need many functionalities in the same app.<li>Constant updates<li>Consuming oriented (less producing)</ul><br>When localisating apps, you need to think about the string length, especially about the various devices that the users might be using (tablets, phones, etc.). Style and terminology is also an important element - you need to decide if you want to reuse the terminology of other apps or software to which the users are used, or if you want to use your own. Finally, think about your target audience - depending on your public, you'll change the way you localise the app. E.g.: if the audience is young, you might use &quottu&quot instead of &quotvous&quot if you're translating from English into French.<br>Once you localised your app, you need to make a final quality check by testing it. To do this, you can use an emulator: basically, it will display a mobile screen on your computer so that you can test your app and make any changes directly on your machine. However, you won't be able to test every feature, like the intensity of touch or the shaking of the device. Moreover, they can be very slow to use.<br>Another way to test your app is to try it directly on a mobile device. It works pretty well because you'll be able to fully test it, however it might not be completely representative of every user's experience as there are many different mobile models and different versions of the operating systems, etc.<br><br>AppInventor for Android might be very useful if you want to create your own app and/or change an already existing app that is converted in the right format (.aia). It is a programming environment where you can create android apps and is now maintained by the MIT.",
	paragraph_25: "<br><b><i>Lab</b></i><br><br>We used the <a href='http://appinventor.mit.edu/explore/' target='_blank'>MIT App Inventor</a> to localize our app. This app was a quiz on localization skills and topics. <br><img src='images/Game-localisation.png' alt='Display of MIT App Inventor page' width='650' height='300' /><br>We had to &quotinternationalize&quot the code, basically telling which strings needed to be translated by adding a hashtag:<br><img src='images/Mobile-l10n.png' alt='Internationalized strings preceded by a hashtag' width='850' height='130' /><br> Then we translated these strings among others using SDL Trados Studio, replaced the according source code files with the ones we just translated, zip the folders, changed the extension and upload it back to the MIT App Inventor.<br> It was very interesting to see that localization applies to vary different formats, like mobile apps. Even if the MIT website is very user-friendly, the &quotemulator&quot issue is a bit annoying if we don't have an Android device with us to test the app.",
	


}