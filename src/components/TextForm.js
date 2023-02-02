import React, {useState} from 'react';
import PropTypes from 'prop-types';

//state belongs to a component.

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  } 

  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    
    props.showAlert('Converted to upper case!', 'success');
  }

  const handleLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);

    props.showAlert('Converted to lower case!', 'success');
  }

  const handleClearText = () => {
    let newText = '';
    setText(newText);

    props.showAlert('Cleared the text!', 'success');
  }

  const capitaliseText = () => {
    let newText = text[0].toLocaleUpperCase() + text.slice(1);
    setText(newText);

    props.showAlert('Capitalised the text!', 'success');
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);

    props.showAlert('Copied to clipboard!', 'success');
  }

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));

    props.showAlert('Removed extra spaces!', 'success');
  }

  const [text, setText] = useState(''); 

  const[fword, setFindWord] = useState('');
  const[rword, setReplaceWord] = useState('');

  const handleFindChange = (event) => {
    let newText = event.target.value;
    setFindWord(newText);
  }

  const handleReplaceChange = (event) => {
    let newText = event.target.value;
    setReplaceWord(newText);
  }

  const handleReplaceText = () => {
    let newText = text.replace(fword, rword);
    setText(newText);
    setReplaceWord('');
    setFindWord('');

    props.showAlert('Replaced text!', 'success');
  }

  const handleReplaceAllText = () => {
    let newText = text.replaceAll(fword, rword);
    setText(newText);
    setReplaceWord('');
    setFindWord('');

    props.showAlert('Replaced all text!', 'success');
  }

  //applying the css style to change the mode.
  let changeAreaMode = {
    background : props.mode === 'light' ? '#FFFFFF' : '#404040',
    color : props.mode === 'light' ? 'black' : '#FFFFFF'
  }

  return (
    <>
      <div className='container' style={{color : props.mode === 'light' ? '#000' : '#fff'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={changeAreaMode} onChange={handleOnChange} id="controlTextArea" rows="8"></textarea>
        </div>
        <button type="button" disabled={text.length === 0} className="btn btn-primary btn-md mx-1 my-1" onClick={handleUpCase}>Convert to uppercase</button>
        <button type='button' disabled={text.length === 0} className='btn btn-primary btn-md mx-1 my-1' onClick={handleLowCase}>Convert to lowercase</button>
        <button type='button' disabled={text.length === 0} className='btn btn-primary btn-md mx-1 my-1' onClick={capitaliseText}>Capitalise text</button>
        <button type='button' disabled={text.length === 0} className="btn btn-primary btn-md mx-1 my-1" onClick={removeExtraSpaces}>Remove extra spaces</button>
        <button type='button' disabled={text.length === 0} className="btn btn-primary btn-md mx-1 my-1" onClick={handleCopyText}>Copy text</button>
        <button type='button' disabled={text.length === 0} className='btn btn-outline-danger btn-md mx-1 my-1' onClick={handleClearText}>Clear text</button>
      </div>

      <div className="container mt-4" style={{color : props.mode === 'light' ? '#000' : '#fff'}}>
        <div className='change d-flex flex-wrap'>
          <input type="text" id="find" style={changeAreaMode} value={fword} onChange={handleFindChange} className='form-control w-25' placeholder='find word'/>
          <input type="text" id="replace" style={changeAreaMode} value={rword} onChange={handleReplaceChange} className='form-control w-25 ms-3' placeholder='replace word'/>
        </div>

        <button type='button' disabled={text.length === 0} className='btn btn-primary btn-sm mt-2' onClick={handleReplaceText}>Replace</button>
        <button type='button' disabled={text.length === 0} className='btn btn-primary btn-sm mt-2 ms-2' onClick={handleReplaceAllText}>Replace all</button>
      </div>

      <div className="container mt-3" style={{color : props.mode === 'light' ? '#000' : '#fff'}}>
        <h3>Your Text Summary</h3>
        <p className='fw-semibold'>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words, {text.length} characters.</p>
        <p className='fw-semibold'>{0.08 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length} minutes read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : 'Enter something in text box to preview it here.'}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
    heading : PropTypes.string
}
