/*
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2005, 2006, 2007, 2009, 2010 Zimbra, Inc.
 * 
 * The contents of this file are subject to the Zimbra Public License
 * Version 1.3 ("License"); you may not use this file except in
 * compliance with the License.  You may obtain a copy of the License at
 * http://www.zimbra.com/license.
 * 
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied.
 * ***** END LICENSE BLOCK *****
 */

/**
 * @constructor
 * @class
 * DwtDropEvent is generated by the Drag and Drop framework when a drag n drop operation is
 * in process. The drop event is dispatched to the registered {@link DwtDropTarget} instance.
 * 
 * @author Ross Dargahi
 * 
 * @see DwtDropTarget
 */
DwtDropEvent = function() {
	/**
	 * Type of drag operation. One of:
	 * <ul>
	 * <li>{@link DwtDragEvent.DRAG_START}</li>
	 * <li>{@link DwtDragEvent.SET_DATA}</li>
	 * <li>{@link DwtDragEvent.DRAG_END}</li>
	 * </ul>
	 */
	this.operation = null;
	
	/**
	 * Drop target control.
	 * @type DwtControl
	 * */	
	this.targetControl = null;
	
	/**
	 * Action being performed. One of:
	 * <ul>
	 * <li>{@link Dwt.DND_DROP_NONE}</li>
	 * <li>{@link Dwt.DND_DROP_COPY}</li>
	 * <li>{@link Dwt.DND_DROP_MOVE}</li>
	 * </ul>
	 */
	this.action = null;
	
	/**
	 * Drag source data. This is the application data associated with the item being dragged.
	 */
	this.srcData = null;

	/**
	 * Whether the DnD framework should perform the operation. The application is
	 * responsible for setting this value based on whatever business logic it is
	 * implementing.
	 * @type boolean
	 */
	this.doIt = false;
}

/**
 * A draggable object has entered the drop target.
 */
DwtDropEvent.DRAG_ENTER = 1;

/**
 * A draggable object has left the drop target.
 */
DwtDropEvent.DRAG_LEAVE = 2;

/**
 * Drag operation has changed e.g. from move to copy.
 */
DwtDropEvent.DRAG_OP_CHANGED = 3;

/**
 * A draggable object has been dropped on the drag target.
 */
DwtDropEvent.DRAG_DROP = 4;