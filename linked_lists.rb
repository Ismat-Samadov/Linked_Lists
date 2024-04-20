class Node
  attr_accessor :value, :next_node

  def initialize(value = nil)
    @value = value
    @next_node = nil
  end
end

class LinkedList
  attr_accessor :head, :tail

  def initialize
    @head = nil
    @tail = nil
  end

  def append(value)
    new_node = Node.new(value)
    if @head.nil?
      @head = new_node
      @tail = new_node
    else
      @tail.next_node = new_node
      @tail = new_node
    end
  end

  def prepend(value)
    new_node = Node.new(value)
    if @head.nil?
      @head = new_node
      @tail = new_node
    else
      new_node.next_node = @head
      @head = new_node
    end
  end

  def size
    count = 0
    current_node = @head
    while current_node
      count += 1
      current_node = current_node.next_node
    end
    count
  end

  def at(index)
    return nil if index < 0 || index >= size

    current_node = @head
    index.times { current_node = current_node.next_node }
    current_node
  end

  def pop
    return nil if @head.nil?

    current_node = @head
    if current_node == @tail
      @head = nil
      @tail = nil
    else
      until current_node.next_node == @tail
        current_node = current_node.next_node
      end
      current_node.next_node = nil
      @tail = current_node
    end
  end

  def contains?(value)
    current_node = @head
    while current_node
      return true if current_node.value == value
      current_node = current_node.next_node
    end
    false
  end

  def find(value)
    current_node = @head
    index = 0
    while current_node
      return index if current_node.value == value
      current_node = current_node.next_node
      index += 1
    end
    nil
  end

  def to_s
    str = ''
    current_node = @head
    while current_node
      str += "( #{current_node.value} ) -> "
      current_node = current_node.next_node
    end
    str += 'nil'
  end
end
