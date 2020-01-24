const Contact = require('model/contact.model')
const objectId = require('mongoose').Types.ObjectId

exports.getContacts = async (req, res) => {
  try {
    const contactsFound = await Contact.find().sort('firstname')

    if (!contactsFound)
      return res.status(500).json({ message: "Could'nt Found Contact" })
    return res.send(contactsFound)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Contact not Found' })
  }
}

exports.saveContact = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      company,
      title,
      mobilenumber,
      work,
      nickname,
      birthdate,
      website,
      relation,
      notes
    } = req.body
    const contactSaved = await new Contact({
      firstname,
      lastname,
      email,
      company,
      title,
      mobilenumber,
      work,
      nickname,
      birthdate,
      website,
      relation,
      notes
    }).save()

    if (!contactSaved)
      return res.status(500).json({ message: "Could'nt save Contact" })

    return res.send(contactSaved)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Registration Failed' })
  }
}
exports.getContactById = async (req, res) => {
  try {
    const _id = req.params.id
    const ContactFound = await Contact.findById(objectId(_id))

    if (!ContactFound)
      return res.status(500).json({ message: "Could'nt Found Contact" })

    return res.send(ContactFound)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Contact not Found' })
  }
}

exports.updateContact = async (req, res) => {
  try {
    const _id = req.params.id
    const contactUpdated = await Contact.findByIdAndUpdate(_id, {
      ...req.body
    })

    if (!contactUpdated) {
      return res.status(500).json({ message: "Could'nt Update Contact" })
    } else {
      return res.send(contactUpdated)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Data not Found' })
  }
}

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params

    const DeleteContact = await Contact.findByIdAndDelete(id)

    if (!DeleteContact)
      return res.status(500).json({ message: "Could'nt Found Contact" })

    return res.send(DeleteContact)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Contact not Found' })
  }
}

exports.searchContacts = async (req, res) => {
  try {
    let options = {
      search: '',
      skip: 0,
      limit: 10
    }

    if (req.body.search) {
      options.search = new RegExp(req.body.search, 'i')
    }
    if (req.body.start) {
      options.skip = req.body.start
    }
    if (req.body.pageSize) {
      options.limit = req.body.pageSize
    }
    console.log('options', req.body, options)

    const condition = {
      $or: [
        { title: { $regex: options.search } },
        { mobilenumber: { $regex: options.search } }
      ]
    }

    const data = await Contact.find(condition)
      .skip(options.skip)
      .limit(options.limit)
      .lean()

    const totalRecords = await Contact.countDocuments(condition)
    res.status(200).json({
      success: true,
      data: {
        totalRecords,
        data,
        pageSize: req.body.pageSize,
        start: req.body.start
      },
      message: 'search successfully'
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    })
  }
}
