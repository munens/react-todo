import React, { Component } from 'react';
import moment from 'moment';
import deleteImg from './icons/if_Block_381636.png';
import completeImg from './icons/if_Complete_Symbol_381607.png';
import undoImg from './icons/if_063_Undo_183192.png';
import editImg from './icons/if_write_126582.png';
import './TasksTable.css';

class Task extends Component {

	constructor(props){
		super(props);
		this.state = {
			completion: false
		}
	}

	componentDidMount(){
		this.setState({completion: this.props.task.completion === true ? true : false});
	}

	componentWillReceiveProps(nextProps){
		this.setState({completion: nextProps.task.completion === true ? true : false});
	}

	render(){
		const completion = this.state.completion;
		return(
			<div className="task">
				<div className="task-detail">
					<p className={`task-text ${completion ? 'complete' : ''}`} >{this.props.task.detail}</p>
					<p className="task-date">{moment(this.props.task.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
				</div>
				{!completion &&
					<div className="config-btn">
						<img 
							onClick={(event) => this.props.onEditTaskClicked()} 
							alt="edit" 
							className="img-edit" 
							src={editImg} 
						/>
					</div>
				}
				<div className="config-btn">
					<img 
						onClick={(event) => this.props.deleteTask(this.props.index)} 
						alt="delete" 
						className="img-delete" 
						src={deleteImg} 
					/>
				</div>
				<div className="config-btn">
					<img 
						onClick={(event) => {
							this.props.task.completion = true;
							completion ? this.props.uncompleteTask(this.props.index) : this.props.completeTask(this.props.index); 
						}}
						alt="complete" 
						className="img-complete" 
						src={completion ? undoImg: completeImg} 
					/>
				</div>
			</div>
		)
	}
}

export default Task;