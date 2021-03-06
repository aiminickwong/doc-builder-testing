builder.CreateFile("docx");

var Api = editor;
var oDocument     = Api.GetDocument();
oDocument.CreateNewHistoryPoint();

var oSection1, oParagraph1, oParagraph2;

oParagraph1 = Api.CreateParagraph();
oParagraph1.AddText("First Page");
oSection1 = oDocument.CreateSection(oParagraph1);
oDocument.Push(oParagraph1);

oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("Second Page");
oDocument.Push(oParagraph2);

builder.SaveFile("docx", "/home/pc/Documents/temp_docx/text_in_section.docx");
builder.CloseFile();