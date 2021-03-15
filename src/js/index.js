import $ from "jquery";
import { createHTMLText } from "./utility/helper";
import "../sass/index.scss"

$("h3").parent().append(createHTMLText("Ok"));
$("body").append("<p>Please test this one.</p>")
