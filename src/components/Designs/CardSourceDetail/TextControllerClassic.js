import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from "styled-components";

const EditorWrapper = styled.div`
    // width: 80%;
    // margin-left: auto;
    // margin-right: auto;
    margin-bottom: 10px;
    .copyright {
        width: max-content;
        margin-left: auto;
        font-size: 0.5rem;
    }
`;
class TextControllerClassic extends Component {
    render() {
        const { item } = this.props;
        return (<EditorWrapper>
            <CKEditor
                editor={ClassicEditor} data={item.content}
                onInit={editor => { console.log('Editor is ready to use!', editor); }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    this.props.getValue({ content: data });
                }}
                onBlur={(event, editor) => { console.log('Blur.', event, editor); }}
                onFocus={(event, editor) => { console.log('Focus.', editor); }} />
            <p className="copyright">(editor: CKEditor 5 classic)</p>
        </EditorWrapper>);
    }
}

export default TextControllerClassic;