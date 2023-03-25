export const setupCounter= () =>{
  ` <div>  
  <form>
  <label for="tag">Choose a tag:</label>
  <select id="tag" name="tag">
    <option value="div">div</option>
    <option value="a">a</option>
    <option value="form">form</option>
    <option value="h1">h1</option>
    <option value="input">input</option>
  </select>
  <div class="form-group">
    <label for="class-input">class:</label>
    <input type="text" id="class-input" name="class">
  </div>

  <div class="form-group">
    <label for="id-input">id:</label>
    <input type="text" id="id-input" name="id">
  </div>

  <div class="form-group" id="href-group" style="display: none;">
    <label for="href-input">href:</label>
    <input type="text" id="href-input" name="href">
  </div>

  <div class="form-group" id="target-group" style="display: none;">
    <label for="target-select">target:</label>
    <select id="target-select" name="target">
      <option value="_self">_self</option>
      <option value="_blank">_blank</option>
      <option value="_parent">_parent</option>
      <option value="_top">_top</option>
    </select>
  </div>

  <div class="form-group" id="method-group" style="display: none;">
    <label for="method-select">method:</label>
    <select id="method-select" name="method">
      <option value="get">get</option>
      <option value="post">post</option>
    </select>
  </div>

  <div class="form-group" id="action-group" style="display: none;">
    <label for="action-input">action:</label>
    <input type="text" id="action-input" name="action">
  </div>

  <div class="form-group" id="type-group" style="display: none;">
    <label for="type-select">type:</label>
    <select id="type-select" name="type">
      <option value="text">text</option>
      <option value="email">email</option>
      <option value="password">password</option>
      <option value="checkbox">checkbox</option>
      <option value="radio">radio</option>
      <option value="submit">submit</option>
      <option value="reset">reset</option>
    </select>
  </div>

  <div class="form-group" id="name-group" style="display: none;">
    <label for="name-input">name:</label>
    <input type="text" id="name-input" name="name">
  </div>

  <div class="form-group" id="value-group" style="display: none;">
    <label for="value-input">value:</label>
    <input type="text" id="value-input" name="value">
  </div>
    
 <div class="form-group" id="text-group" >
    <label for="text-input">Text:</label>
    <input type="text" id="text-input" name="text">
  </div>
  <button type="submit">Create element</button>
    </form>
  </div>
`
}




