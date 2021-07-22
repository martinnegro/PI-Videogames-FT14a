import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import PostVideogame from './components/PostVideogame';

const component = (
        <BrowserRouter>
          <Provider store={store}>
            <PostVideogame />
          </Provider>
        </BrowserRouter>
        )

const setup = () => {
  const utils = render(component)
  const inputName = utils.getByPlaceholderText('Nombre')
  const inputDescription = utils.getByPlaceholderText('Descripción')
  const inputUrl = utils.getByPlaceholderText('URL de una imagen')
  return {
    inputName,
    inputDescription,
    inputUrl,
    ...utils,
  }
}        

describe('PostVideogame', function() {
  describe('Contiene textos de alerta dinámicos para los inputs', function() {
    test('Name: El nombre es obligatorio', () => {
      const { inputName } = setup();
      expect(inputName.value).toBe('')
      expect(screen.getByText('El nombre es obligatorio')).toBeInTheDocument()
      fireEvent.change(inputName, {target: {value: 'The Best Game'}})
      expect(inputName.value).toBe('The Best Game')
      expect(screen.queryByText('El nombre es obligatorio')).toBeNull()
    });
    test('Description: La descripción es obligatoria', () => {
      const { inputDescription } = setup();
      expect(inputDescription.value).toBe('')
      expect(screen.getByText('La descripción es obligatoria')).toBeInTheDocument()
      fireEvent.change(inputDescription, {target: {value: 'This is a good game'}})
      expect(inputDescription.value).toBe('This is a good game')
      expect(screen.queryByText('La descripción es obligatoria')).toBeNull()
    });
    test('ImgUrl: URL de imagen obligatoria y válida', () => {
      const { inputUrl } = setup();
      expect(inputUrl.value).toBe('')
      expect(screen.getByText('La url de la imagen es obligatoria')).toBeInTheDocument()
      fireEvent.change(inputUrl, {target: {value: 'http://'}})
      expect(inputUrl.value).toBe('http://')
      expect(screen.queryByText('No es una url válida')).toBeInTheDocument()
      fireEvent.change(inputUrl, {target: {value: 'http://agoodimage.jpg'}})
      expect(inputUrl.value).toBe('http://agoodimage.jpg')
      expect(screen.queryByText('No es una url válida')).toBeNull()
    });
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

});
