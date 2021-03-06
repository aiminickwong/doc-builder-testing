builder.CreateFile("docx");

var Api = editor;
var oDocument     = Api.GetDocument();
oDocument.CreateNewHistoryPoint();

var oFinalSection, oTable, oParagraph;

oParagraph = Api.CreateParagraph();
oFinalSection   = oDocument.GetFinalSection();
oFinalSection.SetEqualColumns(1, 720);
oTable = Api.CreateTable(3, 3);
oDocument.Push(oTable);
oParagraph.AddColumnBreak();
oDocument.Push(oParagraph);

builder.SaveFile("docx", "/home/pc/Documents/temp_docx/add_table_in_one_column.docx");
builder.CloseFile();