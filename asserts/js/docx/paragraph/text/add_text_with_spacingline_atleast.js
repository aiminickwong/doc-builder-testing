builder.CreateFile("docx");

var Api = editor;
var oDocument     = Api.GetDocument();
oDocument.CreateNewHistoryPoint();

var oParagraph, oTable, oTableRow, oCell, oCellContent, oRun, oDrawing;

oParagraph = Api.CreateParagraph();
oParagraph.SetSpacingLine(400, "atLeast");
oParagraph.AddText("Atleast:20pt");
oDocument.Push(oParagraph);

builder.SaveFile("docx", "/home/ilya/Documents/temp_docx/add_text_with_spacingline_atleast_in_paragraph.docx");
builder.CloseFile();