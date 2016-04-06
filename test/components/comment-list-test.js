import { renderComponent, expect } from "../test_helper";
import CommentList from "../../src/components/comment-list";

describe("CommentList", ()=>{
    let component;
    beforeEach(()=>{
        component = renderComponent(CommentList,null,{comments:["new comment", "new comment 2"]});
    });

    it("shows an LI for each comment", ()=>{
        expect(component.find("li").length).to.equal(2);
    });

    it("shows each comment that is provided", ()=>{
        expect(component).to.contain("new comment");
        expect(component).to.contain("new comment 2");
    });
});