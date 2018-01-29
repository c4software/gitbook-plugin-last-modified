module.exports = {
    hooks: {
        "page:before": function (page) {
            let content = page.content;
            content = `${content} *\n\n >*Modifié le: {{ file.mtime }}`; 
            page.content = content; 
            return page;
        }
    }
};
