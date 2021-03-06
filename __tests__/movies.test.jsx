import * as React from "react";
import {render} from "react-dom";
import {ListMovies} from "../movieApplication";
import {Questions} from "../questions-1";


describe("movie pages", () => {

    it("shows movies list", () => {
        const element = document.createElement("div");
        render(<ListMovies/>, element);
        expect(element.innerHTML).toMatchSnapshot();
    });

    it("lets the user show a new movie", () => {
        const question = Questions.find(q => q.id === 995);
        const answerNames = Object
            .keys(question.answers)
            .filter(a => question.answers[a] !== null);
    expect(answerNames).toEqual([
        "answer_a", "answer_b", "answer_c", "answer_d"
    ])
    });

});