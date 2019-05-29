import React from 'react';
import * as PDFJS from 'pdfjs-dist';
import getCoords from './pdfCoords';
import getJSON from './PDF_Test_JSON';
import {Button} from "../components/button/Button";
import {object} from "prop-types";

export default class PDFPrinter extends React.Component {
    static propTypes = {
        formData: object
    };

    renderPages() {
        var context = this;
        var currPage = 1; //Pages are 1-based not 0-based
        var numPages = 0;
        var thePDF = null;
        var url = require('../images/Vaf_EU.pdf');
        //This is where you start
        PDFJS.getDocument(url).then(function (pdf) {
            //Set PDFJS global object (so we can easily access in our page functions
            thePDF = pdf;
            //How many pages it has
            numPages = pdf.numPages;
            //Start with first page
            pdf.getPage(1).then(handlePages);
        });

        function handlePages(page) {
            //This gives us the page's dimensions at full scale
            var scale = 5;
            var viewport = page.getViewport(scale);

            //We'll create a canvas for each page to draw it on
            var wrapper = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvas.id = "canvas_" + currPage;
            wrapper.appendChild(canvas);
            wrapper.style.borderStyle = 'solid';
            wrapper.style.width = Math.floor(viewport.width / scale) + 'pt';
            wrapper.style.height = Math.floor(viewport.height / scale) + 'pt';
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            canvas.style.width = "100%";
            canvas.style.height = "100%";

            //Draw it on the canvas
            page.render({canvasContext: context, viewport: viewport});
            //Add it to the web page
            document.getElementById('placer').appendChild(wrapper);

            //Move to next page
            currPage++;
            if (thePDF !== null && currPage <= numPages) {
                thePDF.getPage(currPage).then(handlePages);
            }
        }
    }

    render() {
        return (<div>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>
            {this.renderPages()}
            <Button className="visa-application-form__download-PDF-button"
                    onClick={this.download.bind(this)}>Скачать</Button>
            <div id="placer" style={{top: -10000, position: "absolute"}}></div>
        </div>);
    }

    addData() {
        var canvasCount = 4;
        for (var pageNumber = 1; pageNumber <= canvasCount; pageNumber++) {
            var canvas = document.getElementById("canvas_" + pageNumber);
            var pageCoords = getCoords()[pageNumber - 1];
            this.addDateToCanvas(canvas, getJSON(), pageCoords);
        }
    }

    addDateToCanvas(canvas, json, pageCoords) {
        var scale = 5;
        var font = scale * 11 + "px Arials";

        var getX = function (x) {
            return canvas.width / canvas.clientWidth * x;
        };
        var getY = function (y) {
            return canvas.height / canvas.clientHeight * y;
        };

        var ctx = canvas.getContext("2d");
        ctx.font = font;
        ctx.fillStyle = 'blue';
        for (var key in pageCoords) {
            var value = json[key];
            if (!value || !json.hasOwnProperty(key) || value == null || value == undefined || value === "")
                continue;
            if (Array.isArray(value)) {
                // this.drawCheckLineArray(ctx, value, pageCoords[key], getX, getY);
            } else {
                ctx.fillText(json[key], getX(pageCoords[key].x), getY(pageCoords[key].y));
            }
        }
    }

    drawCheckLineArray(ctx, arrVal, coords, getX, getY) {
        for (var i = 0; i < arrVal.length; i++) {
            this.drawCheckLine(ctx, arrVal[i], coords, getX, getY);
        }
    }

    drawCheckLine(ctx, value, coords, getX, getY) {
        ctx.beginPath();
        var x1 = coords[value].x1;
        var y1 = coords[value].y1;
        var x2 = coords[value].x2 || x1 + 14;
        var y2 = coords[value].y2 || y1 + 14;
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'blue';
        ctx.moveTo(getX(x1), getY(y1));
        ctx.lineTo(getX(x2), getY(y2));
        ctx.stroke();
    }

    generatePDF() {
        var doc = new jsPDF('p', 'pt', 'a4');

        this.addCancvasToPdf(doc, "canvas_1");
        doc.addPage();
        this.addCancvasToPdf(doc, "canvas_2");
        doc.addPage();
        this.addCancvasToPdf(doc, "canvas_3");
        doc.addPage();
        this.addCancvasToPdf(doc, "canvas_4");

        doc.save('MeterPhotosReport.pdf');
    }

    download() {
        this.addData();
        this.generatePDF();
    }

    addCancvasToPdf(doc, canvasId) {
        var canvas = document.getElementById(canvasId);
        var dataUrl = canvas.toDataURL('image/jpeg');
        doc.addImage(dataUrl, 'JPEG', 0, 0, Math.floor(doc.internal.pageSize.width), Math.floor(doc.internal.pageSize.height));
    }
};
